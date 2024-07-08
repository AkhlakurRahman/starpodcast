'use client';

import { sidebarLinks } from '@/constants/home';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const LeftSideBar = () => {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<section className='left_sidebar'>
			<nav className='flex flex-col gap-6'>
				<Link
					href={'/'}
					className='flex items-center cursor-pointer max-lg:justify-center gap-1 pb-10'
				>
					<Image
						src='/icons/logo.svg'
						alt='logo'
						width={23}
						height={27}
					/>
					<h1 className='text-24 font-extrabold text-white-5 max-lg:hidden'>
						StarPodcast
					</h1>
				</Link>

				{sidebarLinks.map(({ route, label, imgURL }) => {
					const isActive =
						pathname === route || pathname.startsWith(`${route}/`);

					return (
						<Link
							href={route}
							key={label}
							className={cn(
								'flex items-center gap-3 justify-center lg:justify-start py-4 max-lg:px-4',
								{
									'bg-nav-focus border-r-4 border-orange-1':
										isActive,
								}
							)}
						>
							<Image
								src={imgURL}
								alt={label}
								width={24}
								height={24}
							/>
							<p>{label}</p>
						</Link>
					);
				})}
			</nav>
		</section>
	);
};

export default LeftSideBar;
