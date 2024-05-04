import { z } from "zod";

// validation for username
export const usernameValidation = z
.string()
.min(2, " Username must be of atleast two character ")
.max(20, " Username must be no more than 20 characters ")
.regex(/^[a-zA-Z0-9_]+$/ ," Username must not contain special character ")


// validation for signup schema
export const signUpSchema = z.object({
    usernaame: usernameValidation,
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(6, {message: "password must be atleast 6 character"}).max(20, {message: "password must be not longer than 20 character"}),
})