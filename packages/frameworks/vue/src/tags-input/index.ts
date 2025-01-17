import { Tag, type TagProps } from './tag'
import { TagDeleteTrigger, type TagDeleteTriggerProps } from './tag-delete-trigger'
import { TagInput, type TagInputProps } from './tag-input'
import { TagsInput as TagsInputRoot, type TagsInputProps } from './tags-input'
import { TagsInputClearTrigger, type TagsInputClearTriggerProps } from './tags-input-clear-trigger'
import { useTagsInputContext, type TagsInputContext } from './tags-input-context'
import { TagsInputControl, type TagsInputControlProps } from './tags-input-control'
import { TagsInputInput, type TagsInputInputProps } from './tags-input-field'
import { TagsInputLabel, type TagsInputLabelProps } from './tags-input-label'

const TagsInput = Object.assign(TagsInputRoot, {
  Root: TagsInputRoot,
  ClearTrigger: TagsInputClearTrigger,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Label: TagsInputLabel,
  Tag: Tag,
  TagInput: TagInput,
  TagDeleteTrigger: TagDeleteTrigger,
})

export {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInput,
  TagsInputClearTrigger,
  TagsInputControl,
  TagsInputInput,
  TagsInputLabel,
  useTagsInputContext,
}

export type {
  TagDeleteTriggerProps,
  TagInputProps,
  TagProps,
  TagsInputClearTriggerProps,
  TagsInputContext,
  TagsInputControlProps,
  TagsInputInputProps,
  TagsInputLabelProps,
  TagsInputProps,
}
