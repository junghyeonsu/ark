import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Portal } from '@zag-js/react'
import { vi } from 'vitest'
import {
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
  type HoverCardProps,
} from '.'

const ComponentUnderTest = (props: HoverCardProps) => (
  <HoverCard openDelay={0} closeDelay={0} {...props}>
    <HoverCardTrigger>Hover me</HoverCardTrigger>
    <Portal>
      <HoverCardPositioner>
        <HoverCardContent>
          <HoverCardArrow>
            <HoverCardArrowTip />
          </HoverCardArrow>
          Content
        </HoverCardContent>
      </HoverCardPositioner>
    </Portal>
  </HoverCard>
)

describe('HoverCard', () => {
  it('should render', async () => {
    render(<ComponentUnderTest />)
  })

  it('should open on hover', async () => {
    render(<ComponentUnderTest />)

    const target = screen.getByText('Hover me')
    await user.hover(target)

    const hoverContent = screen.getByText('Content')
    await waitFor(() => expect(hoverContent).toBeVisible())

    await user.unhover(target)
    await waitFor(() => expect(hoverContent).not.toBeVisible())
  })

  it('should invoke onOpen', async () => {
    const onOpen = vi.fn()
    render(<ComponentUnderTest onOpenChange={onOpen} />)
    await user.hover(screen.getByText('Hover me'))

    await waitFor(() => expect(screen.getByText('Content')).toBeVisible())
    expect(onOpen).toHaveBeenCalledTimes(1)
  })
})
