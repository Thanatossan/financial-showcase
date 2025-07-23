import type { ComponentType } from "react"

export type MenuType = {
    path: string
    label: string
    icon: ComponentType
    isRequiredOwner: boolean
    // featureKey?: string
    // children?: {
    //     key: string
    //     label: string
    //     isRequiredOwner: boolean
    // }[]
}