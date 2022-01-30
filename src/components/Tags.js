import React from "react"

const Tags = ({ tags }) => {
  const splitTags = tags.split(",")

  return (
    <>
      {splitTags.map((tag, index) => (
        <span key={tag}>
          {index === splitTags.length - 1 ? ` and ` : ""}
          {tag}
          {index < splitTags.length - 2 ? `, ` : ""}
        </span>
      ))}
    </>
  )
}

export default Tags
