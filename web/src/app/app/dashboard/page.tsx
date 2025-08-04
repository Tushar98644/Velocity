"use client"

import { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarPrimaryButton, PageNavbarRightContent } from '@/components/layout/PageNavbar'
import { Add, CalendarEdit, DirectNotification, SearchNormal1 } from 'iconsax-reactjs'
import PageContent from '@/components/layout/PageContent'
import TraningAnalysis from '@/components/Cards/TraningAnalysis'
import CourseProgress from '@/components/Cards/CourseProgress'
import EmployeeSpotlight from '@/components/Cards/EmployeeSpotlight'
import TimeTracker from '@/components/Cards/TimeTracker'
import Notes from '@/components/Cards/Notes'
import StatusTracker from '@/components/Cards/StatusTracker'
import CurrentProject from '@/components/Cards/CurrentProject'
import ProfileImage from '@/components/assets/profile.png'
import Image from 'next/image'
import { OutlineButton } from '@/components/ui/Buttons'
import Navbar from '@/components/Navbar'
import { authClient } from '@/lib/auth.client'

function Dashboard() {
    const { data: session, isPending } = authClient.useSession();
    console.log(session);
    return (
        <div>
            <Navbar>
                <PageNavbarLeftContent>
                    <Image
                        src={ProfileImage}
                        alt='User'
                        width={40}
                        height={40}
                        className='rounded-full'
                    />
                    <div className=''>
                        <p className='text-sm font-semibold text-gray-800'>Tushar Banik</p>
                        <p className='text-xs font-medium text-gray-500'>Welcome back</p>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton className='all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg'>
                        <SearchNormal1 size={16} />
                    </PageNavbarIconButton>

                    <PageNavbarIconButton className='all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg'>
                        <DirectNotification size={16} />
                    </PageNavbarIconButton>

                    <OutlineButton className='h-8 w-8 gap-1 md:w-auto md:border py-1 px-2 duration-200 hover:bg-gray-100 rounded-lg text-xs all-center'>
                        <CalendarEdit size={16} />
                        <span className='hidden md:inline'>Schedule</span>
                    </OutlineButton>

                    <PageNavbarPrimaryButton className='h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center'>
                        <Add size={16} />
                        <span className='hidden md:inline'>Create request</span>
                    </PageNavbarPrimaryButton>
                </PageNavbarRightContent>
            </Navbar>

            <PageContent>
                <div className='space-y-4 columns-1 sm:columns-2 lg:columns-3'>
                    <div className='break-inside-avoid-column space-y-4'>
                        <TraningAnalysis />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <CourseProgress />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <EmployeeSpotlight />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <TimeTracker />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <Notes />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <StatusTracker />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <CurrentProject />
                    </div>
                </div>

            </PageContent>

        </div>
    )
}

export default Dashboard