// import { inngest } from "@/lib/inngest/client";
// import { helloWorld } from "@/lib/inngest/functions";
// import { serve } from "inngest/next";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     /* your functions will be passed here later! */
//     helloWorld,
//   ],
// });


import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlert, generateMonthlyReports, helloWorld, processRecurringTransaction, triggerRecurringTransactions } from "@/lib/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    checkBudgetAlert,
    triggerRecurringTransactions,
    processRecurringTransaction,
    generateMonthlyReports,
  ],
}); 
