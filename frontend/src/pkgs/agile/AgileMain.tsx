import { AgilePoker } from "./poker/AgilePoker";

export default function AgileMain() {
  return (
    <div>
      <h1 className="text-center text-xl">Task: Add mobile phone login feature.</h1>
      <div className="text-md my-4 text-center text-default-500">Round 1</div>

      <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {/* <AgilePoker hours="0" msg="Task is already completed." />
        <AgilePoker hours="1/2" msg="The task is tiny." />
        <AgilePoker hours="1" msg="These are used for small tasks." />
        <AgilePoker hours="2" msg="These are used for small tasks." />
        <AgilePoker hours="3" msg="These are used for small tasks." />

        <AgilePoker hours="5" msg="These are used for medium sized tasks." />
        <AgilePoker hours="8" msg="These are used for medium sized tasks." />
        <AgilePoker hours="13" msg="These are used for medium sized tasks." />

        <AgilePoker hours="20" msg="These are used for large tasks." />
        <AgilePoker hours="40" msg="These are used for large tasks." />

        <AgilePoker hours="<infinity>" msg="The task is huge." />
        <AgilePoker hours="?" msg="No idea how long it takes to complete this task." /> */}

        <AgilePoker
          hours="1"
          msg="These are used for small tasks."
          username="Michael"
          userDescription="Front end engineer"
        />
        <AgilePoker hours="8" msg="These are used for medium sized tasks." username="Jennifer" userDescription="UI" />
        <AgilePoker
          hours="8"
          msg="These are used for medium sized tasks."
          username="David"
          userDescription="Java Engineer"
        />
        <AgilePoker
          hours="8"
          msg="These are used for medium sized tasks."
          username="Grace"
          userDescription="Product Manager"
        />
        <AgilePoker hours="40" msg="These are used for large tasks." username="Emily" userDescription="Java Engineer" />
      </div>
    </div>
  );
}
