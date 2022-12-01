import { z } from "zod";

export const ProductPUTSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  oldPrice: z.number().optional(),
  newPrice: z.number().optional(),
  stock: z.number().optional(),
  status: z.string().optional(),
  categoryId: z.number().optional(),
  slug: z.string().optional(),
  disPercent: z.number().optional(),
  disPrice: z.number().optional(),
});
