import { AnyZodObject, z, ZodError } from "zod";
import { ReqDefault } from "../@types/types";

// name VARCHAR(255) NOT NULL,
// description VARCHAR(500) NOT NULL,
// status VARCHAR(255) NOT NULL,
// sort INT NOT NULL,

export const CategorySchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.string(),
  sort: z.number(),
});

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  slug: z.string().optional(),
  oldPrice: z.number(),
  newPrice: z.number(),
  stock: z.number(),
  disPercent: z.number().optional(),
  disPrice: z.number().optional(),
  status: z.string(),
  categoryId: z.number(),
});

// User.parse({ username: "Ludwig" });

// extract the inferred type
type CategoryBody = z.infer<typeof CategorySchema>;
// { username: string }

export async function zParse<T extends AnyZodObject>(
  schema: T,
  req: ReqDefault
): Promise<z.infer<T>> {
  return new Promise(function (resolve, reject) {
    try {
      const data = schema.parseAsync(req.body);
      resolve(data);
    } catch (error) {
      if (error instanceof ZodError) {
        reject(error);
      }
      reject(error);
    }
  });
}
