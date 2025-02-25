import { UserIcon } from "lucide-react"
import { defineField, defineType } from "sanity"

export const author = defineType({
    name:"author",
    title:"Author",
    type:"document",
    icon:UserIcon,
    fields:[
        defineField({
            name:"id",
            type:"number",
        }),
        defineField({
            name:"name",
            type:"string",
        }),
        defineField({
            name:"username",
            type:"string",
        }),
        defineField({
            name:"email",
            type:"string",
        }),
        defineField({
            name:"image",
            type:"url",
            initialValue: "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
        }),
        defineField({
            name:"bio",
            type:"text",
        }),
    ],
    preview:{
        select:{
            title:"name"
        }
    }
})