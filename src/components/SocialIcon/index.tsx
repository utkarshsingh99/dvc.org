import React, { ReactElement } from 'react'
import Link from '../Link'
import styles from './styles.module.css'
import { ReactComponent as TwitterIcon } from '../../../static/img/community/icon-twitter.svg'
import { ReactComponent as GithubIcon } from '../../../static/img/community/icon-github.svg'
import { ReactComponent as LinkedInIcon } from './linkedin.svg'

const icons: { [site: string]: ReactElement } = {
  linkedin: <LinkedInIcon />,
  github: <GithubIcon />,
  twitter: <TwitterIcon viewBox="5 5 30 30" />
}

export interface ISocialIcon {
  url: string
  site?: string
}

export interface ISocialIconProps extends ISocialIcon {
  className?: string
}

/*
   Returns a link containing an icon corresponding to the provided site

   Given the situation where either the given link has no site or we don't have
   an icon for it, we return null such that nothing is rendered in map
   functions.
*/
const SocialIcon: React.FC<ISocialIconProps> = ({
  site,
  url,
  className = styles.default
}) => {
  if (!site) return null
  const icon: ReactElement = icons[site]
  if (!icon) return null
  return (
    <Link href={url} className={className} aria-label={site}>
      {icon}
    </Link>
  )
}

// A simple wrapper to render multiple icons from an array
export const SocialIcons: React.FC<{
  className?: string
  links: Array<ISocialIconProps>
}> = ({ links, className }) => (
  <>
    {links.map(({ site, url }, i) => (
      <SocialIcon className={className} site={site} url={url} key={i} />
    ))}
  </>
)

export default SocialIcon
