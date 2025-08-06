"use client"

import { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarRightContent } from '@/components/layout/PageNavbar'
import { Add, Notification, SearchNormal1, Setting4 } from 'iconsax-reactjs'
import PageContent from '@/components/layout/PageContent'
import Tabs from '@/components/Cards/ui/tabs'
import IntegrationsList from '@/components/integrations/IntegrationsList'
import Navbar from '@/components/Navbar'
import { PrimaryButton } from '@/components/ui/Buttons'

const Integrations = () => {
    return (
        <div>
            <Navbar>
                <PageNavbarLeftContent>
                    <div className='border rounded-full w-10 h-10 all-center'>
                        <Setting4 size={18} />
                    </div>
                    <div>
                        <h1 className='text-sm font-semibold text-gray-800'>Integrations</h1>
                        <p className='text-xs font-medium text-gray-500'>Manage your integrations to enhance workflow</p>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton>
                        <SearchNormal1 size={16} />
                    </PageNavbarIconButton>
                    <PageNavbarIconButton>
                        <Notification size={16} />
                    </PageNavbarIconButton>
                    <PrimaryButton>
                        <Add size={16} />
                        <span className='hidden md:inline'>Add integration</span>
                    </PrimaryButton>
                </PageNavbarRightContent>
            </Navbar>

            <PageContent>
                <div className='flex items-center justify-between'>
                    <Tabs minWidth={300} option1='All apps' option2='Connected' option3='Disconnected' />
                    <div>

                    </div>
                </div>

                {/* header */}
                <div className='text-sm'>
                    <h1 className='text-gray-800 font-medium'>Available integrations</h1>
                    <p className='text-xs text-gray-500'>Access the integrated tools and apps ready for your HR tasks</p>
                </div>

                {/* apps/integration options */}
                <IntegrationsList />

            </PageContent>

        </div>
    )
}

export default Integrations