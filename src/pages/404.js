const NotFound = () => {
  if (typeof window !== "undefined") {
    window.location = "/"
  }

  return null
}

export default NotFound
