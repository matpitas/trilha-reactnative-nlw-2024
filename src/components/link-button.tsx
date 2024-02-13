import { Link, LinkProps } from "expo-router";

interface LinkButtonProps extends LinkProps<string> {
    title: string
}


export function LinkButton ({title, ...rest}: LinkButtonProps) {
    return (
        <Link className="text-slate-300 text-center text-base font-body" {...rest}>
            {title}
        </Link>
    )
}