import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            }
        }),
        defineField({
            name: "author",
            type: "reference",
            to: [{ type: "author" }],
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.required().min(3).max(20).required().error("Please enter a category between 3 and 20 characters."),
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required().uri({
                scheme: ["http", "https"],
                allowRelative: true,
            }).error("Please enter a valid URL for the image."),
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
    ],
    preview: {
        select: {
            title: "title",
        }
    }
})