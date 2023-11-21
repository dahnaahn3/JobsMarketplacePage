import { UilWallet, UilPlusSquare, UilUserArrows, UilEnvelopeStar, UilHome  } from '@iconscout/react-unicons'

const MobileFooter = () => {
  return (
    <>
    <div class="fixed bottom-0 left-0 z-50 w-full h-18 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <div class="grid max-w-lg grid-cols-5 mx-auto mt-2 font-small">

        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="h-6 w-6 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500" aria-hidden="true">
            <UilHome />
            </svg>
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Home</span>
        </button>

        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500" aria-hidden="true">
            <UilWallet />
            </svg>
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Jobs</span>
        </button>

        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500" aria-hidden="true">
            <UilPlusSquare />
            </svg>
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Post</span>
        </button>

        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500" aria-hidden="true">
                <UilUserArrows />
            </svg>
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Resources</span>
        </button>

        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500" aria-hidden="true">
                <UilEnvelopeStar />
            </svg>
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Messages</span>
        </button>

    </div>
</div>
    </>
  )
}

export default MobileFooter
