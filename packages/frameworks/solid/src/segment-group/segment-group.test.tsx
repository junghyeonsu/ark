import { render, screen } from '@solidjs/testing-library'
import user from '@testing-library/user-event'
import { For } from 'solid-js'
import { vi } from 'vitest'
import {
  Segment,
  SegmentControl,
  SegmentGroup,
  SegmentGroupLabel,
  SegmentLabel,
  type SegmentGroupProps,
} from './'

const options = [
  { id: 'apple', label: 'Apples' },
  { id: 'orange', label: 'Oranges' },
  { id: 'mango', label: 'Mangoes', disabled: true },
  { id: 'grape', label: 'Grapes' },
]

const ComponentUnderTest = (props: SegmentGroupProps) => (
  <SegmentGroup {...props}>
    <SegmentGroupLabel>Fruits</SegmentGroupLabel>
    <For each={options}>
      {(option) => (
        <Segment value={option.id} disabled={option.disabled}>
          <SegmentLabel>{option.label}</SegmentLabel>
          <SegmentControl />
        </Segment>
      )}
    </For>
  </SegmentGroup>
)

describe('Segment Group', () => {
  it('should render', () => {
    render(() => <ComponentUnderTest />)
  })

  it('should invoke onValueChange if another value has selected', async () => {
    const onValueChange = vi.fn()
    render(() => <ComponentUnderTest onValueChange={onValueChange} />)

    await user.click(screen.getByLabelText('Grapes'))
    expect(onValueChange).toHaveBeenCalledWith({ value: 'grape' })
  })

  it('should not invoke onValueChange if option is disabled', async () => {
    const onValueChange = vi.fn()

    render(() => <ComponentUnderTest onValueChange={onValueChange} />)

    await user.click(screen.getByLabelText('Mangoes'))
    expect(onValueChange).not.toHaveBeenCalled()
  })
})
