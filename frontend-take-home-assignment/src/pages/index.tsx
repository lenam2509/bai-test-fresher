import * as Tabs from '@radix-ui/react-tabs';

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

    <div className='pt-10'>
      <Tabs.Root defaultValue="all">
        <Tabs.List className="flex justify-center gap-4">
          <Tabs.Trigger value="all" className={`hover:bg-[#334155] data-[state=active]:bg-[#334155] data-[state=active]:text-white hover:text-white rounded-full font-bold  text-[#334155] px-[20px] py-2`}>
            All
          </Tabs.Trigger>
          <Tabs.Trigger value="pending" className=" hover:bg-[#334155] data-[state=active]:bg-[#334155] data-[state=active]:text-white hover:text-white rounded-full font-bold  text-[#334155] px-[20px] py-2">
            Pending
          </Tabs.Trigger>
          <Tabs.Trigger value="completed" className=" hover:bg-[#334155] data-[state=active]:bg-[#334155] data-[state=active]:text-white hover:text-white  rounded-full font-bold  text-[#334155] px-[20px] py-2">
            Completed
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="all" className="tab-content">
          <TodoList all={true} completed={false} />
        </Tabs.Content>
        <Tabs.Content value="pending" className="tab-content">
          <TodoList all={false} completed={false} />
        </Tabs.Content>
        <Tabs.Content value="completed" className="tab-content">
          <TodoList completed={true} all={false} />
        </Tabs.Content>
      </Tabs.Root>
    </div>



        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
