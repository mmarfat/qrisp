import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import LanguageToggle from "@/components/custom/LanguageToggle";

const mockChangeLanguage = vi.fn();
const mockUseTranslation = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: () => mockUseTranslation()
}));

let mockLanguagesSetting = ['en', 'hr'];
vi.mock('@/components/custom/LanguageToggle/settings', () => ({
  get LANGUAGES() { return mockLanguagesSetting; }
}));

describe("LanguageToggle", () => {

  const user = userEvent.setup();

  it("renders the language toggle button", () => {
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "en",
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<LanguageToggle />);
    expect(screen.getByTestId("language-toggle-button")).toBeInTheDocument();
  })

  it('renders the EN language code when resolved language is English', () => {
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "en",
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<LanguageToggle />);
    expect(screen.getByTestId("language-toggle-resolved-code")).toHaveTextContent("EN");
  });

  it('renders the HR language code when resolved language is Croatian', () => {
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "hr",
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<LanguageToggle />);
    expect(screen.getByTestId("language-toggle-resolved-code")).toHaveTextContent("HR");
  });

  it('call changeLanguage when a language option is clicked', async () => {
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "en",
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<LanguageToggle />);
    const toggleButton = screen.getByTestId('language-toggle-button');
    await user.click(toggleButton);

    const menuItemEn = screen.getByTestId('language-menu-item-en');
    await user.click(menuItemEn);
    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
  });

  it('shows check icon next to English when EN is selected', async () => {
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "en",
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<LanguageToggle />);
    const triggerButton = screen.getByTestId("language-toggle-button");

    await user.click(triggerButton);

    const menuItemEn = screen.getByTestId('language-menu-item-en');
    const menuItemHr = screen.getByTestId('language-menu-item-hr');

    expect(within(menuItemEn).getByTestId('check-icon')).toBeInTheDocument();
    expect(within(menuItemHr).queryByTestId('check-icon')).not.toBeInTheDocument();
  });

  it('shows check icon next to Croatian when HR is selected', async () => {
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "hr",
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<LanguageToggle />);
    const triggerButton = screen.getByTestId("language-toggle-button");

    await user.click(triggerButton);

    const menuItemEn = screen.getByTestId('language-menu-item-en');
    const menuItemHr = screen.getByTestId('language-menu-item-hr');

    expect(within(menuItemEn).queryByTestId('check-icon')).not.toBeInTheDocument();
    expect(within(menuItemHr).getByTestId('check-icon')).toBeInTheDocument();
  });

  it('calls i18n.changeLanguage with the correct code when a language item is clicked', async () => {
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "en",
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<LanguageToggle />);
    const triggerButton = screen.getByTestId("language-toggle-button");

    await user.click(triggerButton);

    const menuItemHr = screen.getByTestId('language-menu-item-hr');
    await user.click(menuItemHr);

    expect(mockChangeLanguage).toHaveBeenCalled();
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
    expect(mockChangeLanguage).toHaveBeenCalledWith('hr');
  });

  it('should render the dropdown content but no language items', async () => {
    mockLanguagesSetting = undefined;
    mockUseTranslation.mockReturnValue({
      t: (i18nKey) => i18nKey,
      i18n: {
        resolvedLanguage: "en",
        changeLanguage: mockChangeLanguage,
      },
    });
    render(<LanguageToggle />);
    const triggerButton = screen.getByTestId("language-toggle-button");

    // Act: Open the dropdown
    await user.click(triggerButton);

    // Assert: Check that the content area is present but contains no items
    const menuContent = screen.getByTestId('language-menu-content');
    expect(menuContent).toBeInTheDocument();

    const menuItems = within(menuContent).queryAllByRole('menuitem');
    expect(menuItems).toHaveLength(0);
  });
});
