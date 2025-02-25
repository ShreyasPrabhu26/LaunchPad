import { UserIcon } from "lucide-react"
import { Rule } from "postcss"
import { defineField, defineType } from "sanity"

export const startup = defineType({
    name:"startup",
    title:"Startup",
    type:"document",
    fields:[
        defineField({
            name:"title",
            type:"string",
            validation:(rule) => rule.required().error("Please enter a Title!")
        }),
        defineField({
            name:"slug",
            type:"slug",
            options:{
                source:'title'
            }
        }),
        defineField({
            name:"author",
            type:"reference",
            to:{type:"author"},
            validation:(rule) => rule.required().error("Please Provide Author!")
        }),
        defineField({
            name:"views",
            type:"number",
        }),
        defineField({
            name:"description",
            type:"text",
            validation:(rule) => rule.required().error("Please enter a Description!")
        }),
        defineField({
            name:"category",
            type:"string",
            validation:(rule) => rule.min(1).max(20).required().error("Please enter a category!")
        }),
        defineField({
            name:"image",
            type:"url",
            validation:(rule) => rule.required().error("Please upload an image!")
        }),
        defineField({
            name:"pitch",
            type:"markdown",
            validation:(rule) => rule.required().error("Please enter a pitch!")
        }),
    ]
})