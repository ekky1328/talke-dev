import React from "react"

const Tags = ({ tags }) => {
  const splitTags = tags.split(",")

  console.log(splitTags)

  return (
    <>
      {splitTags.map((tag, index) => (
        <>
          {index === splitTags.length - 1 ? ` and ` : ""}
          {tag}
          {index < splitTags.length - 2 ? `, ` : ""}
        </>
      ))}
    </>
  )
}

export default Tags
