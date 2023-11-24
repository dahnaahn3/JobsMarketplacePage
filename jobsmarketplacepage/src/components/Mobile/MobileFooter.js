import { UilWallet, UilPlusSquare, UilUserArrows, UilEnvelopeStar, UilHome  } from '@iconscout/react-unicons'

const MobileFooter = () => {
  return (
    <>
    <div className="fixed bottom-0 left-0 z-50 w-full h-18 bg-white border-t border-gray-200">
    <div className="grid max-w-lg grid-cols-5 mx-auto mt-2 font-small">

        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg className="h-6 w-6 text-gray-500 group-hover:text-purple-600" aria-hidden="true">
            <UilHome />
            </svg>
            <span className="text-xs text-gray-500 group-hover:text-purple-600">Home</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg className="w-6 h-6 text-gray-500 group-hover:text-purple-600" aria-hidden="true">
            <UilWallet />
            </svg>
            <span className="text-xs text-gray-500 group-hover:text-purple-600">Jobs</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg className="w-6 h-6 text-gray-500 group-hover:text-purple-600" aria-hidden="true">
            <UilPlusSquare />
            </svg>
            <span className="text-xs text-gray-500 group-hover:text-purple-600">Post</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg className="w-6 h-6 text-gray-500 group-hover:text-purple-600" aria-hidden="true">
                <UilUserArrows />
            </svg>
            <span className="text-xs text-gray-500 group-hover:text-purple-600">Resources</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <svg className="w-6 h-6 text-gray-500 group-hover:text-purple-600" aria-hidden="true">
                <UilEnvelopeStar />
            </svg>
            <span className="text-xs text-gray-500 group-hover:text-purple-600">Messages</span>
        </button>

    </div>
</div>
    </>
  )
}

export default MobileFooter
