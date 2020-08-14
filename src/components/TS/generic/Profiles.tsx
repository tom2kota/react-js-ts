import * as React from 'react'

interface ProfileType {
    name: string
    image: string
    age: number | null
}

interface ProfilesProps {
    profiles: Array<ProfileType>
}

function Profiles(props: ProfilesProps) {
    // render a set of profiles
}