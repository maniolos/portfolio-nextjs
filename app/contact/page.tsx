'use client'
import type { NextPage } from 'next';
import {  Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import {NextUIProvider} from '@nextui-org/react'
export default function Contact() {
    return (
        <NextUIProvider>
            <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">Kamil Pawłowski</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button as={Link} color="primary" href="/" variant="light">
            Go back
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div className='flex justify-center items-center mt-[10rem]'>
      <h1 className='text-3xl' > Nothing here yet</h1>
    </div>
        </NextUIProvider>
    
    
    );
}
