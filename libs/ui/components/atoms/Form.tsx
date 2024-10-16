import { forwardRef, FormHTMLAttributes } from 'react'

type FormProps = FormHTMLAttributes<HTMLFormElement>

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => (
  <form
    ref={ref}
    className="flex flex-col w-full gap-2 appearance-none placeholder-gray focus:ring-primary sm:text-sm"
    {...props}
  >
    {props.children}
  </form>
))

Form.displayName = 'Form'
