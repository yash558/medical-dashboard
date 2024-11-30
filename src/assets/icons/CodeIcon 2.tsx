const CodeIcon = ({ className = "", ...rest }) => (
      <svg
            viewBox="0 0 60 60"
            className={`${className}`}
            stroke="currentColor"
            strokeWidth={1.5}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...rest}
      >
            <path d="M22.4998 32.5C20.8498 33.325 19.4748 34.55 18.4498 36.075C17.8748 36.95 17.8748 38.05 18.4498 38.925C19.4748 40.45 20.8498 41.675 22.4998 42.5" />
            <path d="M38.0249 32.5C39.6749 33.325 41.0499 34.55 42.0749 36.075C42.6499 36.95 42.6499 38.05 42.0749 38.925C41.0499 40.45 39.6749 41.675 38.0249 42.5" />
            <path d="M22.5 55H37.5C50 55 55 50 55 37.5V22.5C55 10 50 5 37.5 5H22.5C10 5 5 10 5 22.5V37.5C5 50 10 55 22.5 55Z" />
            <path d="M5.5752 20.025L53.6252 20" />
      </svg>
);

export default CodeIcon;
