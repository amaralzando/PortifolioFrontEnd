
interface IconsProps {
    color?: string;
    size?: number;
}

export function Hamburguer({ color = '#fff', size = 16 }: IconsProps): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
        >
            <path fill={color}
                fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
    );
}