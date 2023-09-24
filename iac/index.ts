#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { DemoStack } from "./lib/api-stack";
import vars from "./vars";

const app = new cdk.App();
new DemoStack(app, "DemoStack", {
  stackName: `DemoStack-${vars.envName}`,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
