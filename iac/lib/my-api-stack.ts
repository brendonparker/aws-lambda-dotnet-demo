import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class MyApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new lambda.Function(this, "Lambda", {
      functionName: "a",
      handler: "Acme.Api",
      code: lambda.Code.fromAsset("../LambdaSource"),
      runtime: lambda.Runtime.DOTNET_6,
      memorySize: 1536,
    });

    const functionUrl = api.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new cdk.CfnOutput(this, "ApiUrl", {
      exportName: "ApiUrl",
      value: functionUrl.url,
    });
  }
}
