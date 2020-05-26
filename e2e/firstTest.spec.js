describe('Example', () => {
  it('should show hello developer message', async () => {
    await device.disableSynchronization();
    await waitFor(element(by.text('Hello developer')))
      .toBeVisible()
      .withTimeout(8000);
    await expect(element(by.text('Hello developer'))).toBeVisible();
  });
});
