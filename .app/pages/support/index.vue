<script setup lang="ts">

definePageMeta({
    title: 'Customer Support',
    preview: {
        title: 'Get Help from Our Customer Support Team',
        description: 'Find information and resources to assist you with any questions or issues',
        categories: ['customer support', 'help'],
        src: '/img/screens/auth-login-1-dark.png',
        srcDark: '/img/screens/auth-login-1-dark.png',
        order: 54, // Adjust the order as needed
    },
});

</script>

<template>
    <div>
        <div class="max-w-4xl mx-auto mt-8">
            <BaseCard class="pb-6">
                <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
                    <BaseHeading as="h3" size="sm" weight="medium">
                        Customer Support
                    </BaseHeading>
                    <BaseText size="xs" class="text-muted-400">Find information and resources to assist you with any questions or issues</BaseText>
                </div>
                <div class="px-8 pt-5">
                    <p>
                        Our Customer Support team is here to help you. Whether you have questions about our products, need assistance with an order, or have any other inquiries, we're ready to provide the support you need.
                    </p>

                    <!-- Contact Options -->
                    <div class="my-8">
                        <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
                            Contact Options
                        </BaseHeading>
                        <p>
                            We offer multiple ways to get in touch with our Customer Support team:
                        </p>
                        <ul class="list-disc pl-6">
                            <li>Email: <a href="mailto:support@[yourcompany].com">support@[yourcompany].com</a></li>
                            <li>Phone: [Your Phone Number]</li>
                            <li>Live Chat: [Provide details if applicable]</li>
                        </ul>
                    </div>

                    <!-- Picture 1 -->
                    <div class="my-8">
                        <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 1" class="w-full h-auto" />
                    </div>

                    <!-- Frequently Asked Questions (FAQs) -->
                    <div class="my-8">
                        <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
                            Frequently Asked Questions (FAQs)
                        </BaseHeading>
                        <p>
                            Before reaching out, you may find answers to common questions in our FAQs. Explore topics such as order tracking, returns, and more.
                        </p>
                        <p>
                            <a href="/faqs">Visit our FAQs page</a>
                        </p>
                    </div>

                    <!-- Picture 2 -->
                    <div class="my-8">
                        <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 2" class="w-full h-auto" />
                    </div>

                    <!-- Self-Help Resources -->
                    <div class="my-8">
                        <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
                            Self-Help Resources
                        </BaseHeading>
                        <p>
                            Explore our self-help resources for step-by-step guides and troubleshooting tips. Learn how to use our products and resolve common issues.
                        </p>
                        <p>
                            <a href="/self-help">Explore Self-Help Resources</a>
                        </p>
                    </div>

                    <!-- Picture 3 -->
                    <div class="my-8">
                        <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 3" class="w-full h-auto" />
                    </div>

                    <!-- Continue adding more content and pictures as needed -->

                </div>
                <!-- You can add additional styling and content as needed -->
            </BaseCard>
        </div>
    </div>
</template>
