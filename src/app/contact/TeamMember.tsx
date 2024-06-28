import Image, { type StaticImageData } from "next/image"

export function TeamMember({
  image,
  name,
  title,
  email,
}: {
  image: StaticImageData
  name: string
  title: string
  email: string
}) {
  return (
    <div className="flex flex-col gap-3 items-center min-w-72 w-1/4">
      <Image width="200" className="rounded-[50%]" src={image} alt={name} />
      <p className="font-bold text-xl">{name}</p>
      <p className="italic text-xl">{title}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}
