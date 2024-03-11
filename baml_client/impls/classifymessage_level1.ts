// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck


import { GPT4 } from '../client';
import { ClassifyMessage } from '../function';
import { schema } from '../json_schema';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = `\
Classify the following INPUT into following:
Category
---
Refund
CancelOrder
TechnicalSupport
AccountIssue
Question

INPUT
---
date: {//BAML_CLIENT_REPLACE_ME_MAGIC_input.message_date//}
message: {//BAML_CLIENT_REPLACE_ME_MAGIC_input.message//}
---

Output json format:
"Category as string"[]

JSON:\
`;

const deserializer = new Deserializer<Category[]>(schema, {
  $ref: '#/definitions/ClassifyMessage_output'
});

ClassifyMessage.registerImpl('level1', async (
args: {
  message: string, message_date: string
}
  ): Promise<Category[]> => {
  const message = args.message;
  const message_date = args.message_date;
  
    const result = await GPT4.run_prompt_template(
      prompt_template,
      [
        "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.message_date//}",
      
        "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.message//}",
      ],
      {
        "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.message_date//}": message_date,
        "{//BAML_CLIENT_REPLACE_ME_MAGIC_input.message//}": message,
      }
    );

    return deserializer.coerce(result.generated);
  }
);
