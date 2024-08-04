'use server'

import { LIST_ITEMS } from "@/db/localdb"
import { revalidatePath } from "next/cache"

export default async function addListItem(data: FormData) {
  setTimeout(() => console.log(LIST_ITEMS), 1000)

  LIST_ITEMS.push({
    id: LIST_ITEMS.length,
    title: data.get('title') as string
  })

  revalidatePath('')
}