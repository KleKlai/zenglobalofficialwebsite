"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const signInFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(25, {
      message: "Username must not be greater than 25 characters.",
    }),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <h1 className="text-3xl font-semibold font-notoSans pb-3">Sign in with your Zenglobal ID</h1>
              <FormControl className="focus:border-tertiary focus:outline focus:outline-4">
                <Input placeholder="Email, mobile, or username" {...field} className="py-6 text-lg"/>
              </FormControl>
              <FormDescription className="pb-5 text-slate-800">
                By signing in, you agree to our{" "}
                <Link href="" className="underline text-tertiary">Terms of Service </Link>and{" "}
                <Link href="" className="underline text-tertiary">Privacy Policy.</Link>
              </FormDescription>
              <FormMessage />
              <Button className="border-1xl p-6 bg-tertiary text-lg font-semibold font-outfit">Let's go</Button>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
}
