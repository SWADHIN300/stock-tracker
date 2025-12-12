import { success } from "better-auth";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";

export const sendSignUPEmail = inngest.createFunction(
    {id: 'sign-up-email'},
    {event: 'app/user.created'},
    async({ event,step}) =>{
        const userProfile = `
          - Investment goals:${event.data.investmentGoals}
          - Risk tolerance: ${event.data.riskTolerance}
          - Preferred industry: ${event.data.PreferredIndustry}
        `

        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}',userProfile)

        const response = await step.ai.infer('generate-welcome-intro',{
             model: step.ai.models.gemini({model: 'gemini-2.5-flash-lite'}),
             body: {
                contents:[
                    {
                        role:'user',
                        parts:[
                            {text: prompt}
                        ]
                    }
                ]
             }
        })

        await step.run('send-welcome-email', async() =>{
            const part = response.candidates?.[0]?.content?.parts?.[0];
            const iintroText = (part && 'text' in part ? part.text : null) || 'Thanks for joing Signalist. You now have the tools to track markets and make smart moves'

            //email sending logic
        });
        return {
            success: true,
            Message: ' Welcome email sent successfully'
        }
    }
)