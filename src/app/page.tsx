"use client"

import { redirect } from 'next/navigation'

function Home() {
  redirect('/dashboard/analytics')
}

export default Home