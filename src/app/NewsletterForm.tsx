"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().refine((data) => data, {
    message: "Name is required",
  }),
  email: z.string().email(),
})

export function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                  autoComplete="off"
                  className="border-navbar-muted bg-navbar placeholder:text-navbar-muted-foreground focus-visible:rign-navbar-muted-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  autoComplete="off"
                  className="border-navbar-muted bg-navbar placeholder:text-navbar-muted-foreground focus-visible:rign-navbar-muted-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="secondary"
          className="bg-navbar-muted text-navbar-foreground hover:text-navbar-foreground hover:bg-navbar-muted-foreground/30 w-full"
          type="submit"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  )
}
