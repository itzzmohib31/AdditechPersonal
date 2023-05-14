import { StaticImageData } from "next/image"
import { ReactElement } from "react"

export type dropdownDataType = {
    heading: string,
    url: string
    link?: string
    list?: {
        name: string,
        url?: string
    }[]
}

export type menuListType = {
    link: string,
    name: string,
    isDropdown?: boolean,
    dropdownData?: dropdownDataType[]
}[]

export type serviceListType = {
    link?: string,
    image: StaticImageData,
    title: string,
}[]

export type sponsorsListType = {
    links?: sponsorsLinkType,
    image: StaticImageData,
    title: string,
}[]

export type sponsorsLinkType = {
    Icon:ReactElement,
    URL:string
}[]

export type servicePageType = {
    
    Title:string,
    MainImg:StaticImageData
    MainPara:any,
    ServicesList:any,
    SecondaryPara:any

}[]
