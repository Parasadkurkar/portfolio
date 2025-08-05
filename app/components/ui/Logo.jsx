import React from 'react'
import Diamond from './diamond'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link
            href={"/"}
            className="text-2xl m-0 p-0 md:text-4xl textColor1 font-semibold"
        >
            <Diamond />
            <span className="align-middle font-black" >
                PARAS
            </span>
        </Link>
    )
}

export default Logo;