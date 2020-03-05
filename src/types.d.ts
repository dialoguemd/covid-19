declare module 'react-simple-chatbot' {
  declare let ReactSimpleChatbot: React.FC<{ steps: Step[] }>

  type StepId = string | number
  type StepTrigger =
    | StepId
    | ((data: { value; steps: Record<string, any> }) => StepId)

  interface BaseStep {
    id: StepId
    placeholder?: string
    metadata?: Record<string, any>
    trigger?: StepTrigger
  }

  export interface TextStep extends BaseStep {
    message:
      | string
      | ((prevData: {
          previousValue?: any
          steps: Record<string, any>
        }) => string)
    avatar?: string
    delay?: number
    end?: boolean
    hideInput?: boolean
    inputAttributes?: ComponentProps<'input'>
  }

  export interface UserStep extends BaseStep {
    user: true
    validator?: <T>(value: T) => string | true
    end?: boolean
  }

  export interface OptionEntry {
    label: string
    value: any
    trigger: StepTrigger
  }

  export interface OptionStep {
    options: OptionEntry[]
    end?: boolean
    hideInput?: boolean
  }

  interface CustomComponentProps {
    previousStep: Record<string, any>
    step: Record<string, any>
    steps: Record<string, any>
    triggerNextStep(nextStep: StepId | { value: any; trigger: StepId })
  }

  export interface CustomStep {
    component: React.ElementType<CustomComponentProps>
    replace?: boolean
    waitAction?: boolean
    asMessage?: boolean
    trigger?: StepTrigger
    delay?: number
    end?: boolean
    hideInput?: boolean
  }

  export type Step = TextStep | UserStep | OptionStep | CustomStep

  export default ReactSimpleChatbot
}
