// user.inputType.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    picture: string;
}