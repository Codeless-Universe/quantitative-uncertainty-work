export default function SuccessBox({ title = "Success", ...props }: { title?: string; description?: string }) {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-md text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-6 text-xl font-bold text-gray-900">{title}</p>
        {props.description && <p className="mt-2 text-base font-medium text-gray-500">{props.description}</p>}
      </div>
    </div>
  );
}
