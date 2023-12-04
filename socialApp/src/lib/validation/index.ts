import * as z from 'zod'
 export const signupValidationSchema = z.object({
    name: z.string().min(2, { message: 'Name must be atleast 2 characters long.' }),
    username: z.string().min(2, { message: 'Username must be atleast 2 characters long.'}),
    email: z.string(),
    password: z.string().min(8, { message: 'Must have (min) 8 characters.'}),
  })


 export const signinValidationSchema = z.object({
    email: z.string(),
    password: z.string().min(8, { message: 'Must have (min) 8 characters.'}),
  })

export const postValidationSchema = z.object({
    
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
    caption: z.string().max(1000),
  })
   