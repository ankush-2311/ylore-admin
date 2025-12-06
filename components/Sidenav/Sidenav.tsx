'use client'

import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { navMenu } from './sidenavData'
import { sidebarStyles } from './sidenavStyle'
import ylore from '../../public/assets/ylore.svg'
import { NavItemTypes } from '@/utils/types/sidenavDataType'
import { useRouter } from 'next/router'

const Sidenav = () => {
  const router = useRouter()
  const pathname = router.pathname

  const isActive = (itemPath: string) => {
    if (itemPath === '/') return pathname === '/'
    return (
      pathname.startsWith(itemPath) ||
      (itemPath.includes(':id') && pathname.startsWith('/escalation-task/escalations'))
    )
  }

  const renderItems = (items: NavItemTypes[], depth = 0) =>
    items.map((item) => {
      const active = isActive(item.path)
      const hasChildren = !!item.children?.length
      const firstChildPath = item.children?.[0]?.path ?? item.path

      return (
        <Fragment key={item.id}>
          <Link href={firstChildPath} style={{ textDecoration: 'none' }}>
            <ListItemButton
              sx={{
                ...(active
                  ? item.hasSubRoute
                    ? sidebarStyles.subRouteButtonHover
                    : sidebarStyles.listItemButtonHover
                  : sidebarStyles.listItemButton),
                pl: 2 + depth * 2,
              }}
            >
              <ListItemIcon sx={sidebarStyles.listItemIcon}>
                <Image
                  src={active ? item.selectedLogo : item.logo}
                  alt={item.name}
                  width={20}
                  height={20}
                  priority
                />
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ fontSize: '15px' }}
                sx={sidebarStyles.listItemText}
              />
            </ListItemButton>
          </Link>

          {hasChildren && (
            <Collapse in={pathname.startsWith(item.path)} timeout="auto" unmountOnExit>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <List
                  disablePadding
                  sx={{
                    ...(active
                      ? sidebarStyles.sublistItemButtonHover
                      : sidebarStyles.sublistItemButton),
                  }}
                >
                  {renderItems(item.children!, depth + 1)}
                </List>
              </Box>
            </Collapse>
          )}
        </Fragment>
      )
    })

  return (
    <Box sx={sidebarStyles.container}>
      <Box sx={sidebarStyles.logoBox}>
        <Image src={ylore} alt="logo" width={180} height={50} priority />
      </Box>

      <List sx={{ mt: 1 }}>{renderItems(navMenu)}</List>
    </Box>
  )
}

export default Sidenav
