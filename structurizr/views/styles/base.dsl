# Elementos Base

element "Element" {
    stroke #2E4DFF
    color #2E4DFF
    strokeWidth 6
    shape roundedbox
    fontSize 14
}

element "Software System" {
    stroke #2E4DFF
}

element "Container" {
    stroke #576FFF
}

element "Component" {
    stroke #7A91FF
}

element "External System" {
    stroke #6b6b6b
    color #6b6b6b
}

element "Boundary" {
    strokeWidth 6
}

element "Deployment Node" {
    strokeWidth 3
}

element "Group" {
    strokeWidth 3
    border dotted
}

element "Folder" {
    shape folder
}

relationship "Relationship" {
    thickness 3
    style dashed
}

# Elementos Específicos

element "Person" {
    shape person
}

element "Web Browser" {
    shape webbrowser
}

element "Database" {
    shape cylinder
}

element "Backend" {
    shape shell
}
