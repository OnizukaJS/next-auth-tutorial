'use client'
// Remember you must use an AuthProvider for
// client component to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

// It's usually better to not use client component as page
// the common case is to use server-component as parent
// and call client-component inside
export default function ClientPage() {
    const {data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section className='flex flex-col gap-6'>
            <UserCard user={session?.user} pagetype={"Client"} />
        </section> 
    )
}