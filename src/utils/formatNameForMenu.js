export const formatNameForMenu = (name) => {
    return name
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
}