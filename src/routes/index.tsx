import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getHierarchy } from "~/lib/styling";
export default component$(() => {
  const stylingArray = useSignal("");

  return (
    <div class="p-12">
      <h1 class="text-4xl text-center mb-5">Google Maps Cloud Styling</h1>
      <section class="grid grid-cols-2 gap-10 max-w-7xl mx-auto *:border  *:rounded-lg *:bg-white *:shadow">
        <div class="space-y-5">
          {stylingArray.value && (
            <div>
              <button
                onClick$={() => {
                  console.log({ arr: stylingArray.value.trim() });
                }}
                class="py-2 px-4 bg-blue-600 text-white rounded"
              >
                Transform Styles
              </button>
            </div>
          )}
          <textarea
            name=""
            class="min-h-[50vh] p-5 rounded-lg w-full"
            bind:value={stylingArray}
          ></textarea>
        </div>
        <div class="p-5">B</div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
