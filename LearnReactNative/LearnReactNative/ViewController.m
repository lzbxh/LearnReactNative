//
//  ViewController.m
//  LearnReactNative
//
//  Created by 伙伴行 on 16/8/26.
//  Copyright © 2016年 伙伴行. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"

@interface ViewController ()

@property(strong ,nonatomic)RCTRootView *rootView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
    self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"HuoBan" initialProperties:nil launchOptions:nil];
    [self.view addSubview:self.rootView];
    self.rootView.frame = self.view.bounds;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
