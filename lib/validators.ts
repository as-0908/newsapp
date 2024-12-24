import { z } from 'zod';

const searchParamsSchema = z.object({
  query: z.string().optional(),
  page: z.string().transform(Number).pipe(
    z.number().positive().int()
  ).optional(),
  country: z.string().length(2).optional(),
});

export function validateSearchParams(params: Record<string, string | null>) {
  return searchParamsSchema.parse(params);
}