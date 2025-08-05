import React from 'react'
import GithubIcon from "./svg/github-icon.svg";
import LinkedinIcon from "./svg/linkedin-icon.svg";
import InstagramIcon from "./svg/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const SocialMediaLinks = () => {
    return (
        <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/Parasadkurkar" target="_blank" rel="noopener noreferrer">
                <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <hr />
            <Link href="https://linkedin.com/in/Parasadkurkar" target="_blank" rel="noopener noreferrer">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <hr />
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
        </div>
    )
}

export default SocialMediaLinks;